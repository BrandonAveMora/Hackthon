from django.db import models

class Product(models.Model):

    """ Modelo de Productos """

    class Meta: db_table = 'products'

    # ID
    id = models.AutoField(primary_key=True)

    # Producto
    product_name = models.CharField(max_length=255, unique=True)

    # Descripción
    description = models.TextField()

    # Imágen
    image = models.URLField(max_length=255, unique=True, null=False, blank=False)

    # Precio
    price = models.DecimalField(decimal_places= 2, max_digits=6,null=False, blank=False)

    # Fabricante
    maker = models.CharField(max_length=255, null=False, blank=False)

    # Stock
    stock = models.IntegerField(null=False, blank=False)

    # Contenido
    content = models.CharField(max_length=15)

    #Tipo de producto
    type = models.CharField(max_length=255, null=False, blank=False)
    

    def __str__(self):
        return self.product_name

