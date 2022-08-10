import uuid
from django.db import models
from django.utils import timezone
from django.conf import settings


class PackageOffers(models.Model):

    package_order = models.IntegerField(null=True, blank=True)
    airtime_value = models.FloatField(null=True, blank=True)
    selling_price_ETB = models.FloatField(null=True, blank=True)
    selling_price_USD = models.FloatField(null=True, blank=True)
    discount_rate = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f'{self.airtime_value} ETB Package Offer'

    class Meta:
        verbose_name_plural = "Package Offers"
        verbose_name = "Package Offer Detail"


class PromoCodes(models.Model):

    promoter = models.CharField(max_length=150, null=True, blank=True)
    promo_code = models.CharField(max_length=50, null=True, blank=True)
    promo_discount_rate = models.FloatField(null=True, blank=True)
    promo_expiry_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f'Promoter: {self.promoter} - Promo Code: {self.promo_code}'

    class Meta:
        verbose_name_plural = "Promotion Discount Listings"
        verbose_name = "Promotion Discount Detail"


class Operators(models.Model):

    operator_name = models.CharField(max_length=50, null=True, blank=True)
    operator_order = models.IntegerField(null=True, blank=True)
    operator_image_link = models.CharField(
        max_length=50, null=True, blank=True)
    operator_active = models.BooleanField(null=True, blank=True)
    
    def __str__(self):
        return f'Operator: {self.operator_name} - Operating: {self.operator_active}'

    class Meta:
        verbose_name_plural = "Mobile Network Operators"
        verbose_name = "Network Operator Info"


class Invoces(models.Model):

    invoices_commit = models.DateTimeField(default=timezone.now)
    invoive_uuid = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False)
    receiver_phone = models.IntegerField(null=True, blank=True)
    package_offers = models.ForeignKey(PackageOffers, on_delete=models.CASCADE)
    agent = models.ForeignKey(settings.AUTH_USER_MODEL, default=0,
                              on_delete=models.SET_DEFAULT)
    promo_code = models.ForeignKey(PromoCodes, default=0,
                                   on_delete=models.SET_DEFAULT)
    operator = models.ForeignKey(Operators, default=0,
                                 on_delete=models.SET_DEFAULT)

    def __str__(self):
        return f'Invoice number: {self.invoive_uuid} - Operating: {self.operator_active}'

    class Meta:
        verbose_name_plural = "Invoce Records"
        verbose_name = "Invoices Detail"


class PaymentMethod(models.Model):

    provider_name = models.CharField(max_length=50, null=True, blank=True)
    provider_order = models.IntegerField(null=True, blank=True)
    provider_image_link = models.CharField(
        max_length=50, null=True, blank=True)
    provider_active = models.BooleanField(null=True, blank=True)


class Transactions(models.Model):

    invoice = models.OneToOneField(
        Invoces,
        on_delete=models.CASCADE,
        primary_key=True,
    )

    transaction_status = models.CharField(max_length=50, null=True, blank=True)
    transaction_amount = models.FloatField(null=True, blank=True)
    payment_method = models.ForeignKey(PaymentMethod, on_delete=models.CASCADE)

    def __str__(self):
        return f'Phone: {self.invoice.Receiver_phone} - Status: {self.transaction_status} - Amount:  {self.transaction_amount}'

    class Meta:
        verbose_name_plural = "Transactions Records"
        verbose_name = "Transactions Detail"
