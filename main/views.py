from forms import Contact
from django.shortcuts import render, render_to_response


def home(request):        
	if request.method == 'POST':
	    form = Contact(request.POST)
	    if form.is_valid():
	        cleanData = form.cleaned_data	    
	        recipients = ['jonny@mustcreate.co.uk']
	    
	        from django.core.mail import send_mail
	        send_mail(
	        	cleanData['subject'], 
	        	cleanData['message'], 
	        	cleanData.get('email'), 
	        	recipients)
	        success = "Thank you!"
	        form = Contact()
	        return render_to_response( 'main/index.html', {'form': form, 'success': success})
	else:
	    form = Contact()
	return render(request, 'main/index.html', {
		'form': form
		})

def thanks(request): 
	if request.method == 'POST':
		success = "thanks"
		return render(request, 'main/index.html', {'form': form, 'success': success})
	else:
		return HttpResponseRedirect('/')