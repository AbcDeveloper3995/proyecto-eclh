from django.shortcuts import render

def index(request):
    return render(request, 'eclh/index.html')
def nosotros(request):
    return render(request, 'eclh/nosotros.html')
def productos(request):
    return render(request, 'eclh/productos.html')
def contacto(request):
    return render(request, 'eclh/contacto.html')
