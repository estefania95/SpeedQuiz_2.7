from django.db import models

from jugadors.models import Jugador
from preguntes.models import Pregunta

# Create your models here.


class Partida(models.Model):
    jugador = models.ManyToManyField(Jugador, through='PartidaJugada')
    dataPartida = models.DateField(auto_now_add=True, blank=True)
    pregunta = models.ManyToManyField(Pregunta)


class PartidaJugada(models.Model):
    idPartida = models.ForeignKey(Partida, on_delete=models.CASCADE)
    nomJugador = models.ForeignKey(Jugador, on_delete=models.CASCADE)
    esGuanyador = models.BooleanField()
    numFormatges = models.IntegerField()
    numFormatgets = models.IntegerField(blank=True, null=True)