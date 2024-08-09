from django.db import models
from servicios import models as servicios_models

# Create your models here.

class TipoPagos(models.Model):
    nombre = models.CharField(max_length=100)
    imagen = models.ImageField(null=True, blank=True)

    def __str__(self) -> str:
        return self.nombre

class Pago(models.Model):
    fecha_pago = models.DateTimeField(auto_now=True)
    monto = models.FloatField()
    tipo_pagos = models.ForeignKey(TipoPagos, on_delete=models.CASCADE)
    servicio = models.ForeignKey(servicios_models.Servicio, on_delete=models.CASCADE)