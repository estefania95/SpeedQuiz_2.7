from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.urls import reverse

from .forms import JugadorForm, ExtendedUserCreationForm


# Create your views here.
def benvinguda(request):
    return render(request, 'benvinguda/index.html', {})

@login_required
def botiga(request):
    return render(request, 'botiga/botiga.html', {'current_user': request.user})

@login_required
def home(request):
    if request.user.is_authenticated:
        username = request.user.username
    else:
        username = 'no tas logejat'

    context = {'username': username}
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
    return render(request, 'joc/unJugador.html', {'current_user': request.user})

@login_required
def puntuacio(request):
    return render(request, 'puntuacio/puntuacio.html', {'current_user': request.user})


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
            usuari = authenticate(username=username, password1=password)
            login(request, usuari)

            return redirect('benvinguda')
    else:
        form = ExtendedUserCreationForm()
        jugador_form = JugadorForm()

    context = {'form': form, 'jugador_form': jugador_form}

    return render(request, 'registre/registrarse.html', context)
