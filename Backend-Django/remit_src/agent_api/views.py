from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.generics import ListCreateAPIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
# from rest_framework_simplejwt.tokens import RefreshToken

from .models import AgentProfile
from .serializers import AgentProfileUpdateSerializer, CustomAgentSerializer


class UserRegistrationAPIView(ListCreateAPIView):

    permission_classes = [AllowAny]
    serializer_class = CustomAgentSerializer
    queryset = AgentProfile.objects.all()

    def post(self, request, format='json'):
        serializer = CustomAgentSerializer(data=request.data)
        print("DATA: ", serializer.initial_data)
        if serializer.is_valid():
            user = serializer.save()
            print("USER CHECK ************", user)
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileViewSet(viewsets.ModelViewSet):

    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = AgentProfileUpdateSerializer

    def get_object(self, queryset=None, **kwargs):
        user = self.kwargs.get('pk')

        return get_object_or_404(AgentProfile, username=user)

    def get_queryset(self):
       return AgentProfile.objects.all()

    def update(self, request, format=None, *args, **kwargs):

        instance = self.get_object()
        serializer = self.serializer_class(instance, data=request.data, context={
                                           'request': request}, partial=True)

        print("********************************* PROFILE SERIALIZER *************************************")
        print("Profile Instance", instance)
        print(serializer.initial_data)

        if serializer.is_valid(raise_exception=True):
            profile = serializer.save()
            if profile:
                return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class BlacklistTokenUpdateView(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         print(request.data)
#         try:
#             refresh_token = request.data["refresh_token"]
#             token = RefreshToken(refresh_token)
#             token.blacklist()
#             return Response(status=status.HTTP_205_RESET_CONTENT)
#         except Exception as e:
#             return Response(status=status.HTTP_400_BAD_REQUEST)
