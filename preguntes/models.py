from django.db import models
# Create your models here.



class Categoria(models.Model):
    color = models.CharField(max_length=10, unique=True)
    nomCategoria = models.CharField(max_length=50, unique=True)
    def __str__(self):
        return self.nomCategoria


class Pregunta(models.Model):
    idPregunta = models.AutoField(primary_key=True)
    textPregunta = models.TextField()
    idColor = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    def __str__(self):
        return self.textPregunta




class Resposta(models.Model):
    idResposta = models.AutoField(primary_key=True)
    textResposta = models.CharField(max_length=200)
    esCorrecta = models.BooleanField()
    idPregunta = models.ForeignKey(Pregunta, on_delete=models.CASCADE)
    def __str__(self):
        return self.textResposta


