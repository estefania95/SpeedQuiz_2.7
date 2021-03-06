from django.conf.urls import url, include
from . import views


urlpatterns = [
    url(r'^$', views.benvinguda, name='benvinguda'),
    url(r'^registre/', views.registre, name='registre'),
    url(r'^accounts/login', views.iniciSessio, name='iniciSessio'),
    url(r'^home/', include([
        url(r'^$', views.home, name='home'),
        url(r'^botiga/', views.botiga, name='botiga'),
        url(r'^joc/', views.joc, name='joc'),
        url(r'^puntuacio/', views.puntuacio, name='puntuacio'),
        url(r'^api/', views.json, name='json'),
    ])),
    url(r'^partida/', views.respostaPartida, name='partida'),
    url(r'^politica/', views.politica, name='politica'),
    url(r'^autors/', views.autors, name='autors'),
]