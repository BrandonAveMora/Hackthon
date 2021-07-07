# urlpatterns = [
    
# ]
from rest_framework.routers import DefaultRouter
from apiproducts.views import ProductViewSet

router = DefaultRouter()
router.register('api/products', ProductViewSet)

urlpatterns = router.urls