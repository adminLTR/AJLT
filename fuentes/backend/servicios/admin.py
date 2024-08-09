from django.contrib import admin
from .models import *

class TipoServicioAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre')

class TrabajadorAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'apellido', 'telefono', 'ciclo', 'staff', 'institucion', 'carrera')

class TemaAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre')

class CursoAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre_curso')

class ServicioAdmin(admin.ModelAdmin):
    list_display = ('id', 'descripcion','fecha_solicitud', 'fecha_limite', 'trabajador', 'curso', 'tipo_servicio', 'cliente')

# Register your models here.

admin.site.register(TipoServicio, TipoServicioAdmin)
admin.site.register(Trabajador, TrabajadorAdmin)
admin.site.register(Tema, TemaAdmin)
admin.site.register(Curso, CursoAdmin)
admin.site.register(Servicio, ServicioAdmin)