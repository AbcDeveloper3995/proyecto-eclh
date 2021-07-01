from django.urls import path
from apps.eclh.views import index, nosotros, productos, contacto

urlpatterns = [
    path('', index, name='index'),
    path('nosotros', nosotros, name='nosotros'),
    path('productos', productos, name='productos'),
    path('contacto', contacto, name='contacto'),
]