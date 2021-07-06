from rest_framework import serializers
from apiusers.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        #fields = ['email', 'password']