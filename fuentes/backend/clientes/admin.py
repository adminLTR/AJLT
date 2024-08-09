from django.contrib import admin
from .models import *

class InstitucionAdmin (admin.ModelAdmin):
    list_display = ('id','nombre','abreviatura')

class CarreraAdmin(admin.ModelAdmin):
    list_display = ('id','nombre')

class FuenteAdmin(admin.ModelAdmin):
    list_display = ('id','nombre')

class ClienteAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'apellido', 'ciclo', 'institucion', 'carrera', 'fuente')

# Register your models here.

admin.site.register(Institucion, InstitucionAdmin)
admin.site.register(Carrera, CarreraAdmin)
admin.site.register(Fuente, FuenteAdmin)
admin.site.register(Cliente, ClienteAdmin)