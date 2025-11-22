from rest_framework import viewsets
from django.shortcuts import render
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

def product_list_view(request):
    """Render the modern product list interface"""
    return render(request, 'products/product_list.html')

