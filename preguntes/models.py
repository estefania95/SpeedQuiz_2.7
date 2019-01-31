from django.db import models
from partides.models import Partida
# Create your models here.
class Categoria(models.Model):
    color = models.CharField(max_length=10, unique=True)
    nomCategoria = models.CharField(max_length=50, unique=True)

class Pregunta(models.Model):
    idPregunta = models.AutoField(primary_key=True)
    textPregunta = models.TextField()
    idColor = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    idPartida = models.ManyToManyField(Partida)
    class Meta:
        unique_together = (("idPregunta", "idColor"),)

class Resposta(models.Model):
    idResposta = models.AutoField(primary_key=True)
    textResposta = models.CharField(max_length=200)
    esCorrecta = models.BooleanField()
    idPregunta = models.ForeignKey(Pregunta, on_delete=models.CASCADE)
    class Meta:
        unique_together = (("idResposta", "idPregunta"),)


