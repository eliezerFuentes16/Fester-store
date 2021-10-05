<!DOCTYPE html>
<html>
<head>
	
	<link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='bootstrap/css/bootstrap.css') }}">
	<link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='icons/css/all.css') }}">
	<link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='css/index.css') }}">
	<meta name="viewport" content="width=device-width, initial-scale=0.75">
</head>
<body>
<!-- --------------------------------------------- -->
	<div class="header-div">
		<header class="header">
			<div class="div-header">
				<img width="120" height="120" id="logo" class="m-2" src="{{ url_for('static', filename='media/logo.png') }}"><h2 class="sucursal">SysMark</h2>
			</div>
		</header>
	</div>
			
<!-- --------------------------------------------- -->


{% block content %}

{% endblock %}

<script type="text/javascript" src="{{ url_for('static', filename='js/index.js') }}"></script>
</body>
</html>
