from Backend.conf.common import *

DEBUG = True
ALLOWED_HOSTS = ['*']

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'



BD_USER = "Jalomo"

if BD_USER == "Jalomo":
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'jalomo',
            'USER': 'postgres',
            'PASSWORD': 'z4me5cwh',
            'HOST': 'localhost',
            'PORT': 5432,
        }
    }
elif BD_USER == "Rafa":
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'hack2',
            'USER': 'postgres',
            'PASSWORD': 'wwytk2mu',
            'HOST': 'localhost',
            'PORT': 5432,
        }
    }
""" else:
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'obio',
        'USER': 'postgres',
        'PASSWORD': 'wwytk2muz4me5cwh',
        'HOST': 'localhost',
        'PORT': 5432,
    }
}
 """