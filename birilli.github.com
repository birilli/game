git push <!DOCTYPE html>
<html>
<head>

	<html lang="en-US">
	<meta charset="UTF-8"/>
	<link rel="stylesheet" type="text/css" href="interface.css" />
	<title>not minecraft v. 1.00</title>
	
</head>

	<body id="mainbody">
	<!--It is a good idea to place scripts at the bottom of the <body> element.-->
	<!-- <button onclick="NameOfJavascriptEvent"> -->
	<!-- Item: <span id="item">#</span>-->
	
	
					<div id="intro">
						<p id="introtext"> You are in a forest.
						<br />
						There are many trees around.</p>
					</div id="intro">
	
	
	<ul class="navbar" id="menu">
		<button id="savebtn" onclick="savegame()">Save game</button>
		<button id="delsavebtn" onclick="delsave()">Delete game</button>
	</ul>
	
	
	<div id="resources">
		<table id="tableresources">
			<tr>
				<th id="th1">Resources</th>
				<th id="th2">Number</th>
				<th id="th3">Method</th>
			</tr>
			<tr>
				<td>Wood</td>
				<td><span id="wood">0</span></td>
				<td>Gather wood</td>
			</tr>
			<tr>
				<td>Planks</td>
				<td><span id="planks">0</span></td>
				<td>-10 wood</td>
			</tr>
			<tr>
				<td>Sticks</td>
				<td><span id="sticks">0</span></td>
				<td>-2 planks</td>
			</tr>
			<tr>
				<td>Pickaxe</td>
				<td><span id="pickaxe">No</span></td>
				<td>-3 sticks</td>
			</tr>
			<tr>
				<td>Stone</td>
				<td><span id="stone">0</span></td>
				<td>Mine stone</td>
			</tr>	
			<tr>
				<td>Golems</td>
				<td><span id="golems">0</span></td>
				<td>-<span id="golemCost" id="wordstone">10</td>
			</tr>	
			<tr>
				<td>Iron</td>
				<td><span id="iron">0</span></td>
				<td>???</td>
			</tr>
			<tr>
				<td>Silver</td>
				<td><span id="silver">0</span></td>
				<td>???</td>
			</tr>
			<tr>
				<td>Gold</td>
				<td><span id="gold">0</span></td>
				<td>???</td>
			</tr>
			<tr>
				<td>Coal</td>
				<td><span id="coal">0</span></td>
				<td>???</td>
			</tr>
			<tr>
				<td>Rubies</td>
				<td><span id="ruby">0</span></td>
				<td>???</td>
			</tr>
			<tr>
				<td>Sapphires</td>
				<td><span id="sapphire">0</span></td>
				<td>???</td>
			</tr>
			
		</table>
	</div id="resources">
	
					<div id="buttons">
					
						<button id="woodbtn" title="+1 wood; used to craft planks" onclick="woodClick(number)">Gather Wood</button> 
							<br />
							<script type="text/javascript" src="main.js"></script>	
							
						<button id="plankbtn" title="used to craft sticks" onclick="buyPlank()">Craft Plank</button>
							<br />
							<script type="text/javascript" src="main.js"></script>
							
						<button id="stickbtn" title="used to craft a pickaxe" onclick="craftStick()">Craft Stick</button> 
							<br />
							<script type="text/javascript" src="main.js"></script>
							
						<button id="pickaxebtn" title="allows mining of stone" onclick="craftPickaxe()">Craft Pickaxe</button> 
							<br />
							<script type="text/javascript" src="main.js"></script>
							
							
							
							
							
					</div id="buttons">
					
					<div id="buttoncolumn2">
							<button id="stonebtn" title="+1 stone" onclick="stoneClick()">Mine Stone</button>
							<br />
							<script type="text/javascript" src="main.js"></script>
							
							
							<button id="golembtn" title="-10 stone; +1 wood per 5 sec" onclick="golemClick()">Craft Golem</button>
							<br />
							<script type="text/javascript" src="main.js"></script>
							
							
							
					</div id="buttoncolumn2">
					
<script type="text/javascript" src="main.js"></script>
</body>

</html>
