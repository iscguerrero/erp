$(document).ready(function () {
	activeRow = [];

	data = [{
		id: 1, nombre: 'Raúl', apellido_materno: 'Vázquez', apellido_paterno: 'González', departamento: 'Producción', area: 'Lógistica', antiguedad: '5 años', sueldo_bruto: '$12,500'
	}, {
		id: 2, nombre: 'Pedro', apellido_materno: 'Mata', apellido_paterno: 'López', departamento: 'Contabilidad', area: 'Impuestos', antiguedad: '3 años', sueldo_bruto: '$11,500'
	}];

	templeados = $('#tabla-empleados').bootstrapTable({
		data: data,
		toolbar: '#toolbar',
		clickToSelect: true,
		search: true,
		pagination: true,
		pageSize: 10,
		pageList: [10, 25, 50],
		columns: [
			{ field: 'id', title: 'Id', align: 'center' },
			{ field: 'nombre', title: 'Nombre', sortable: true },
			{ field: 'apellido_paterno', title: 'Ap Paterno', sortable: true },
			{ field: 'apellido_materno', title: 'Ap Materno', sortable: true },
			{ field: 'departamento', title: 'Departamento', sortable: true },
			{ field: 'area', title: 'Área', sortable: true },
			{ field: 'antiguedad', title: 'Antiguedad', sortable: true, align: 'center' },
			{ field: 'sueldo_bruto', title: 'Sueldo Bruto', sortable: true, align: 'right' },
			{
				title: 'Acciones', align: 'right', formatter: function (value, row, index) {
					return "<button type='button' class='btn btn-warning btn-xs editar' title='Editar información'><i class='fa fa-edit'></i></button> <button type='button' class='btn btn-info btn-xs imprimir' title='Imprimir tarjeta'><i class='fa fa-file-pdf-o'></i></button>";
				}
			}
		],
		onClickRow: function (row, $element, field) {
			activeRow = row;
		}
	});

	$('#tabla-empleados tbody').on('click', 'button.editar', function () {
		editarUsuario(activeRow);
	})

});

function editarUsuario(usuario) {
	$.each(usuario, function (item, i) {
		$('#' + item).val(item);
	})
	$('#modal-empleado').modal('show');
}