from django.db import models
from clientes import models as clientes_models

# Create your models here.

class TipoServicio(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    imagen = models.ImageField(null=True, blank=True)

class Trabajador(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    telefono = models.CharField(max_length=10, unique=True)
    email = models.EmailField(unique=True)
    genero = models.CharField(max_length=1)
    ciclo = models.IntegerField()
    imagen = models.ImageField(null=True, blank=True)
    staff = models.BooleanField()
    institucion = models.ForeignKey(clientes_models.Institucion) #falta relacionar
    carrera = models.ForeignKey(clientes_models.Carrera) #falta relacionar

class Tema(models.Model):
    nombre = models.CharField(max_length=100)
    imagen = models.ImageField(null=True, blank=True)

class Curso(models.Model):
    nombre_curso = models.CharField(max_length=100)
    imagen = models.ImageField(null=True, blank=True)

class Servicio(models.Model):
    descripcion = models.CharField(max_length=100, null=True, blank=True)
    comentario = models.CharField(max_length=100, null=True, blank=True)
    fecha_solicitud = models.DateTimeField(auto_now_add=True)
    fecha_inicio = models.DateTimeField(auto_now=True, null=True, blank=True)
    fecha_finalizacion = models.DateTimeField(null=True, blank=True)
    fecha_limite = models.DateTimeField(auto_now=True)
    fecha_entrega = models.DateField(null=True, blank=True)
    trabajador = models.ForeignKey(Trabajador, on_delete=models.CASCADE) #falta relacionar
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    tipo_servicio = models.ForeignKey(TipoServicio, on_delete=models.CASCADE)
    cliente = models.ForeignKey(clientes_models.Cliente) #falta relacionar
    tema = models.ManyToManyField(Tema) #relacion de muchos a muchos

class TipoPagos(models.Model):
    nombre = models.CharField(max_length=100)
    imagen = models.ImageField(null=True, blank=True)

class Pago(models.Model):
    fecha_pago = models.DateTimeField()
    monto = models.FloatField()
    tipo_pagos = models.ForeignKey(TipoPagos, on_delete=models.CASCADE)
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE)
