from enum import auto
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, name, password, birth_date):
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, password=password, birth_date=birth_date)
        user.set_password(password)
        user.save(using=self._db)
        return user
    def create_superuser(self, email, name, password, birth_date):
        user = self.create_user(email, name, password, birth_date)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    class Meta:
        db_table = 'users'
    """ Modelo de Usuario """
    # Id
    id = models.AutoField(primary_key=True)
    # Correo
    email = models.EmailField(max_length=255, unique=True)
    # Nombre
    name = models.CharField(max_length=255, null = False, blank = False)
    # Contraseña
    password = models.CharField(max_length=255, null = False, blank = False)
    # Fecha de nacimiento
    birth_date = models.DateField(null = False, blank = False)
    # Fecha de registro
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)
    # created_at = models.DateTimeField(editable=False)
    # Usuario Activo
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    objects = UserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS =  ['name', 'password', 'birth_date']
    
    def __str__(self):
        return self.email