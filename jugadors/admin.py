from django.contrib import admin
from .models import Jugador
from .models import Skin
from .models import SkinComprada

# Register your models here.

admin.site.register(Jugador)
admin.site.register(Skin)
admin.site.register(SkinComprada)