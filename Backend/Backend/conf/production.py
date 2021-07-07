from Backend.conf.common import *

DEBUG = False
ALLOWED_HOSTS = ['127.0.0.1']
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
