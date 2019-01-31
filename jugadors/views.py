from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from .forms import JugadorForm, ExtendedUserCreationForm
from django.http import HttpResponse


# Create your views here.
def benvinguda(request):
    return render(request, 'benvinguda/index.html', {})


def botiga(request):
    return render(request, 'botiga/botiga.html', {})


def home(request):
    if request.user.is_authenticated:
        username = request.user.username
    else:
        username = 'no tas logejat'

    context = {'username': username}
    return render(request, 'home/home.html', context)


def iniciSessio(request):
    return render(request, 'iniciarSessio/iniciarSessio.html', {})


def joc(request):
    return render(request, 'joc/unJugador.html', {})


def puntuacio(request):
    return render(request, 'puntuacio/puntuacio.html', {})


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
