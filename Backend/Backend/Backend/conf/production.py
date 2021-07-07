from Backend.conf.common import *

DEBUG = False

SESSION_COOKIE_SECURE = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_SECONDS = 31536000
SECURE_REDIRECT_EXEMPT = []
SECURE_SSL_REDIRECT = True
SECURE_PROXY_SSL_HEADER = ('HTTP_XFORWARDED_PROTO', 'https')

ALLOWED_HOSTS = ['ec2-52-5-247-46.compute-1.amazonaws.com', '127.0.0.1']

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'dbintsu085rgpc',
        'USER': 'qksinaltzvgtzu',
        'PASSWORD': '786c308f5af2128a295980b555904d48c67312a0179616e64225f9d951bcb458',
        'HOST': 'ec2-52-5-247-46.compute-1.amazonaws.com',
        'PORT': 5432,
    }
}
