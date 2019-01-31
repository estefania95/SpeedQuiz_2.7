from django.contrib import admin
from .models import Categoria
from .models import Pregunta
from .models import Resposta

# Register your models here.

admin.site.register(Categoria)
admin.site.register(Pregunta)
admin.site.register(Resposta)