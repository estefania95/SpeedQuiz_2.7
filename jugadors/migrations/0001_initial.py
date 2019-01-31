# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-01-31 16:45
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Jugador',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numFormatges', models.IntegerField(blank=True, default=0)),
                ('numFormatgets', models.IntegerField(blank=True, default=0)),
                ('usuari', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Skin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomSkin', models.CharField(max_length=50)),
                ('preu', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='SkinComprada',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('posada', models.BooleanField()),
                ('idJugador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('nomSkin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jugadors.Skin')),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='skincomprada',
            unique_together=set([('idJugador', 'nomSkin')]),
        ),
    ]
