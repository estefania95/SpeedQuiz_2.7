from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Jugador(models.Model):
    usuari = models.OneToOneField(User, on_delete=models.CASCADE)

    numFormatges = models.IntegerField(blank=True, default=6)
    numFormatgets = models.IntegerField(blank=True, default=0)


class Skin(models.Model):
    usuari = models.ManyToManyField(Jugador, through='SkinComprada')
    nomSkin = models.CharField(max_length=50)
    preu = models.IntegerField()
    def __str__(self):
        return self.nomSkin


class SkinComprada(models.Model):
    idJugador = models.ForeignKey(Jugador, on_delete=models.CASCADE)
    nomSkin = models.ForeignKey(Skin, on_delete=models.CASCADE)
    posada = models.BooleanField(default=False)