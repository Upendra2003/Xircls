from django.db import models
import uuid

# Create your models here.
class UserInformation(models.Model):
    user_id=models.UUIDField(default=uuid.uuid4,unique=True,primary_key=True,editable=False)
    user_name=models.CharField(max_length=200)
    contact_no = models.CharField(max_length=15)
    address=models.TextField(max_length=1000,null=True,blank=True)
    created=models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user_name