from django import forms

class Contact(forms.Form):

	name = forms.CharField(required=True, error_messages={'required': 'Please enter your full name'})
	subject = forms.CharField(required=True, error_messages={'required': 'Please enter a subject.'})
	email = forms.EmailField(required=True, error_messages={'required': 'Please enter a correct email'})
	message = forms.CharField(required=True, error_messages={'required': 'Please enter your message'},  widget=forms.Textarea(attrs={'class':'special'}))
    