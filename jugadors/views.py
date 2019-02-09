from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

import random
from django.http import JsonResponse
from django.http import StreamingHttpResponse
from json import loads

from .forms import JugadorForm, ExtendedUserCreationForm
from .models import Jugador, Skin, SkinComprada
from partides.models import Partida, PartidaJugada
from preguntes.models import Pregunta, Categoria, Resposta

import json

# Create your views here.
def benvinguda(request):
    return render(request, 'benvinguda/index.html', {})


@login_required
def botiga(request):
    skins = Skin.objects.all()
    user = request.user
    jugador = Jugador.objects.get(usuari=user)
    skin_comprada = jugador.skin_set.all()
    if request.is_ajax():
        if request.method == 'GET':
            accioGet = request.GET
            nomSkin = accioGet["nomSkin"]
            skin = Skin.objects.get(nomSkin=nomSkin)
            accio = accioGet["accio"]
            if accio == 'posar':
                sposada = SkinComprada.objects.get(idJugador=jugador, posada=True)
                sposada.posada=False
                sposada.save()
                posar = SkinComprada.objects.get(nomSkin=skin, idJugador=jugador)
                posar.posada=True
                posar.save()
            elif accio == 'comprar':
                skin = Skin.objects.get(nomSkin=nomSkin)
                preuSkin = skin.preu
                formatgesJ = jugador.numFormatges
                if formatgesJ >= preuSkin:
                    formatgesJ-=preuSkin
                    jugador.numFormatges=formatgesJ
                    jugador.save()
                    skinComprar = SkinComprada.objects.create(idJugador=jugador, nomSkin=skin, posada=False)
                    skinComprar.save()



    context = {'skin_list': skins, 'skin_comprada': skin_comprada, 'jugador': jugador, 'user': user}
    return render(request, 'botiga/botiga.html', context, {'current_user': request.user})


@login_required
def home(request):
    if request.user.is_authenticated:
        username = request.user
        jugador = Jugador.objects.get(usuari=username)


    else:
        jugador=""

    context = {'jugador': jugador, 'user': username}
    return render(request, 'home/home.html', context, {'current_user': request.user})


def iniciSessio(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user:
            if user.is_active:
                login(request, user)
                return render(request, 'home/home.html', {'current_user': request.user})
            else:
                return HttpResponse("Your account was inactive.")
        else:
            print("Someone tried to login and failed.")
            print("They used username: {} and password: {}".format(username, password))
            return HttpResponse("Invalid login details given")
    else:
        return render(request, 'registration/login.html', {})


@login_required
def joc(request):
    usuari = request.user
    jugador = Jugador.objects.get(usuari=usuari)
    partida = Partida.objects.create()
    partida.save()

    context = {'jugador': jugador, 'usuari': usuari, 'partida': partida}

    return render(request, 'joc/unJugador.html', context, {'current_user': request.user})


@login_required
def puntuacio(request):
    user = request.user
    jugador = Jugador.objects.get(usuari=user)
    partida = jugador.partida_set.all()
    suma = 0
    sumaF = 0
    partidesGuanyades = 0
    for p in partida:
        partidaJugada = PartidaJugada.objects.get(idPartida=p.id, nomJugador=jugador.id)
        suma += partidaJugada.numFormatges
        sumaF += partidaJugada.numFormatgets
        if(partidaJugada.esGuanyador):
            partidesGuanyades+=1
    partidesPerdudes = partida.count() -partidesGuanyades
    context = {'usuari': user, 'jugador': jugador, 'partida': partida, 'suma': suma, 'sumaf': sumaF, 'pG': partidesGuanyades, 'pP': partidesPerdudes}

    return render(request, 'puntuacio/puntuacio.html', context, {'current_user': request.user})


def registre(request):
    if request.method == 'POST':
        form = ExtendedUserCreationForm(request.POST)
        jugador_form = JugadorForm(request.POST)

        if form.is_valid() and jugador_form.is_valid():
            usuari = form.save()

            profile = jugador_form.save(commit=False)
            profile.usuari = usuari

            profile.save()

            skinDefault = Skin.objects.get(id=1)
            username = form.cleaned_data.get('username')
            usuario = User.objects.get(username=username)
            jugador = Jugador.objects.get(usuari=usuario)
            skinComprada = SkinComprada.objects.create(posada=True, idJugador=jugador, nomSkin=skinDefault)

            skinComprada.save()

            password = form.cleaned_data.get('password1')
            usuari = authenticate(username=username, password=password)
            login(request, usuari)

            return redirect('home')
    else:
        form = ExtendedUserCreationForm()
        jugador_form = JugadorForm()

    context = {'form': form, 'jugador_form': jugador_form}

    return render(request, 'registre/registrarse.html', context)


# Vista que retorna un JSON

def json(request):
    preguntes = Pregunta.objects.all()
    numero = random.randint(1, len(preguntes))
    quiz = Pregunta.objects.get(idPregunta=numero)

    text = quiz.textPregunta
    cat = quiz.idColor
    nomCategoria = cat.nomCategoria
    color = cat.color
    categoria = {'nomCategoria': nomCategoria, 'color': color}
    totesRespostes = Resposta.objects.filter(idPregunta=quiz)
    respostes = {}
    contador=0

    for respostaa in totesRespostes:
        contador=contador+1
        textResposta = respostaa.textResposta
        esCorrecta = respostaa.esCorrecta
        resposta = {'textResposta': textResposta, 'esCorrecta': esCorrecta}
        respostes['resposta'+str(contador)] = resposta

    pregunta = {'textPregunta': text, 'categoria': categoria, 'respostes': respostes}


    return JsonResponse(pregunta)

def respostaPartida(request):
    if request.is_ajax():
        if request.method == 'GET':
            dades = request.GET
            formatgets = int(dades['formatgets'])
            formatgetsG = formatgets
            idpartida = dades['partida']
            partida = Partida.objects.get(id=idpartida)
            usuari = request.user
            jugador = Jugador.objects.get(usuari=usuari)
            esGuanyador = False
            if formatgets == 10:
                esGuanyador = True
            formatges=0
            while formatgets >= 4:
                formatges+=1
                formatgets-=4
            formatgesJugador = jugador.numFormatges+formatges
            formatgetsJugador = jugador.numFormatgets+formatgets
            while formatgetsJugador >= 4:
                formatgesJugador+=1
                formatgetsJugador-=4
            jugador.numFormatgets=formatgetsJugador
            jugador.numFormatges=formatgesJugador
            jugador.save()
            partidaJugada = PartidaJugada.objects.create(idPartida=partida, nomJugador=jugador, esGuanyador=esGuanyador,
                                                         numFormatges=formatges, numFormatgets=formatgetsG)
            partidaJugada.save()


    return HttpResponse("OK")

# Politica de privacitat

def politica(request):
    return render(request, 'politica/politica.html')