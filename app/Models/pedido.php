<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pedido extends Model
{

	

    use HasFactory;
    protected $fillable=[
    			"id",
				"idPedido",
				"NOMBRE",
				"TELEFONO",
				"DIRECCION",
				"EMAIL",
				"FECHAHORA",
				"OBSERVACIONES",
				"FORMAPAGO",
				"CAMBIO",
				"COLONIA",
				"SUCURSAL",
				"STATUS",
				"PRODUCTOS",
				"TOTAL",
				"ENTREGADO",
				"idCliente",
				"Factura",
				"NombreRazonSocial",
				"rfc"
			];
}
