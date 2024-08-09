from django.contrib import admin
from .models import *

class TipoPagosAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre')

class PagoAdmin(admin.ModelAdmin):
    list_display = ('id', 'fecha_pago', 'monto', 'tipo_pagos', 'servicio')

# Register your models here.

admin.site.register(TipoPagos, TipoPagosAdmin)
admin.site.register(Pago, PagoAdmin)
