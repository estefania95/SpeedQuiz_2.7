from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Jugador

class ExtendedUserCreationForm(UserCreationForm):
  email = forms.EmailField(required=True)

  class Meta:
    model = User
    fields = ('username', 'email', 'password1', 'password2')

  def save(self, commit=True):
    user = super(ExtendedUserCreationForm, self).save(commit=True)

    user.email = self.cleaned_data['email']

    if commit:
      user.save()
    return user

class JugadorForm(forms.ModelForm):
  class Meta:
    model = Jugador
    fields = ('numFormatges', 'numFormatgets')


