from django.db import models

# Create your models here.

class Institucion(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    abreviatura = models.CharField(max_length=100, null= True)
    imagen = models.ImageField(null=True, blank=True)

class Carrera(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    imagen = models.ImageField(null=True, blank=True)

class Fuente(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    imagen = models.ImageField(null=True, blank=True)
    
class Cliente (models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    telefono = models.CharField(max_length=10, null=True, unique=True, blank=True)
    email = models.EmailField(null=True, unique=True, blank=True)
    genero = models.CharField(max_length=1)
    ciclo = models.IntegerField(null=True, blank=True)
    imagen = models.ImageField(null=True, blank=True)
    institucion = models.ForeignKey(Institucion, on_delete=models.CASCADE)
    carrera = models.ForeignKey(Carrera, on_delete=models.CASCADE)
    fuente = models.ForeignKey(Fuente, on_delete=models.CASCADE)