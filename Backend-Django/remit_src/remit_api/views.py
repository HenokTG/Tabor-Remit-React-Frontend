from .models import Transactions

from .serializers import TransactionSerializer
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAdminUser


class TransactionsLIstCreateView(ListCreateAPIView):

    queryset = Transactions.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [IsAdminUser]
