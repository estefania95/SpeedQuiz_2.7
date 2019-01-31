from django.db import models

from jugadors.models import Jugador

# Create your models here.
class Partida(models.Model):
    dataPartida = models.DateField()

class PartidaJugada(models.Model):
    idPartida = models.ForeignKey(Partida, on_delete=models.CASCADE)
    nomJugador = models.ForeignKey(Jugador, on_delete=models.CASCADE)
    esGuanyador = models.BooleanField()
    numFormatges = models.IntegerField()
    class Meta:
        unique_together = (("idPartida", "nomJugador"),)