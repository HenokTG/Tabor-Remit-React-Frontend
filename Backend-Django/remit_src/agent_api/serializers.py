from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator

from .models import AgentProfile


class CustomAgentSerializer(ModelSerializer):

    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=AgentProfile.objects.all())]
    )
    username = serializers.CharField(required=True, validators=[
                                     UniqueValidator(queryset=AgentProfile.objects.all())])
    phone = serializers.IntegerField(required=True,)
    password = serializers.CharField(
        min_length=8, required=True, validators=[validate_password])
    Confirm_Password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = AgentProfile
        fields = ('username',
                  'email',
                  "phone",
                  'password',
                  'Confirm_Password')
        extra_kwargs = {'Confirm_Password': {'write_only': True}}

    def validate(self, attrs):
        print("VALIDATING ***********")
        print(attrs['password'] != attrs['Confirm_Password'])
        if attrs['password'] != attrs['Confirm_Password']:
            raise serializers.ValidationError(
                {"Confirm_Password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(
            username=validated_data['username'],
            email=validated_data['email'],
            Institute=validated_data['phone'])
        if password is not None:
            instance.set_password(password)
        instance.save()

        return instance


class AgentProfileUpdateSerializer(ModelSerializer):

    class Meta:
        model = AgentProfile
        fields = ('id', 'username', 'email', 'commission', 'first_name', 'last_name',
                  'business_name', 'phone', 'image',)
