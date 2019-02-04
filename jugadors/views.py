from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from .forms import JugadorForm, ExtendedUserCreationForm
from .models import Jugador, Skin, SkinComprada
from partides.models import Partida, PartidaJugada


# Create your views here.
def benvinguda(request):
    return render(request, 'benvinguda/index.html', {})


@login_required
def botiga(request):
    skins = Skin.objects.all()
    user = request.user
    jugador = Jugador.objects.get(usuari=user)
    skin_comprada = jugador.skin_set.all()
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
    return render(request, 'iniciarSessio/iniciarSessio.html', {})


@login_required
def joc(request):
    return render(request, 'joc/unJugador.html', {'current_user': request.user})


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

    return render(request, 'puntuacio/puntuacio.html', context ,{'current_user': request.user})


def registre(request):
    if request.method == 'POST':
        form = ExtendedUserCreationForm(request.POST)
        jugador_form = JugadorForm(request.POST)

        if form.is_valid() and jugador_form.is_valid():
            usuari = form.save()

            profile = jugador_form.save(commit=False)
            profile.usuari = usuari

            profile.save()

            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            usuari = authenticate(username=username, password=password)
            login(request, usuari)

            return redirect('home')
    else:
        form = ExtendedUserCreationForm()
        jugador_form = JugadorForm()

    context = {'form': form, 'jugador_form': jugador_form}

    return render(request, 'registre/registrarse.html', context)
