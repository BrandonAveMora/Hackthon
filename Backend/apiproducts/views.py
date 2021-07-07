# from django.shortcuts import render
# from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .models import Product
from .serializers import ProductSerializer

""" 
class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
     """
    
@api_view(['GET', 'POST'])
def product_api_view(request):
    #list
    if request.method == 'GET':
        #queryset
        products = Product.objects.all()
        products_serializer = ProductSerializer(products, many = True)
        return Response(products_serializer.data, status=status.HTTP_200_OK)
    #create
    elif request.method == 'POST':
        products_serializer = ProductSerializer(data = request.data)
        #validation
        if products_serializer.is_valid():
            products_serializer.save()
            return Response(products_serializer.data, status=status.HTTP_201_CREATED)
        return Response(products_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
      
@api_view(['GET', 'PUT', 'DELETE'])
def product_detail_api_view(request,pk):
    #queryset
    product = Product.objects.filter(id = pk).first()
    #validation
    if product:
        #retrieve
        if request.method == 'GET':
            product_serializer = ProductSerializer(product)
            return Response(product_serializer.data, status=status.HTTP_200_OK)
        #update
        elif request.method == 'PUT':
            product_serializer = ProductSerializer(product, data = request.data)
            #validation
            if product_serializer.is_valid():
                product_serializer.save()
                return Response(product_serializer.data, status=status.HTTP_200_OK)
            return Response(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        #delete
        elif request.method == 'DELETE':
            product.delete()
            return Response({'message': 'El producto ha sido eliminado correctamente!'}, status=status.HTTP_200_OK)
    return Response({'message': 'El usuario no existe!'}, status=status.HTTP_400_BAD_REQUEST)