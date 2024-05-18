from rest_framework.serializers import ModelSerializer
from .models import UserInformation

class UserInformationSerializer(ModelSerializer):
    class Meta:
        model=UserInformation
        fields = ['user_id', 'user_name', 'contact_no', 'address', 'created']