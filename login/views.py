from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

from django.http import HttpResponse
from django.http.response import JsonResponse

from django.shortcuts import render
from django.template import loader
from django.utils.decorators import method_decorator
from django.views.generic import TemplateView


class LoginView(TemplateView):
    template_name = "profile.html"
    
    @method_decorator(login_required)
    def get(self, request, *args, **kwargsuest):

        context = {
            'username': request.user.username,
            'email': request.user.email,
        }

        return render(request, self.template_name, context)
    
    @method_decorator(login_required)
    def post(self, request, *args, **kwargsuest):
        
        if self.request.is_ajax():

            user = User.objects.get(email=request.POST['oldEmail'])
            user.email = request.POST['newEmail']
            user.save()
            
            return JsonResponse({'newEmail': request.POST['newEmail']}, status=200)
