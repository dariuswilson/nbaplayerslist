import requests

url = 'https://free-nba.p.rapidapi.com/players'
headers = {'X-RapidAPI-Host': 'free-nba.p.rapidapi.com', 
'X-RapidAPI-Key': 'e320249532msh7750025bd5bc982p1f34dfjsn72ab6703eb9e'}

r = requests.get(url, headers=headers)
# print(r.json())
players = r.json()['data']
# meta = r.json()['meta']
team_player_dict = {}
for player in players:
	team = player['team']
	team_name = team['full_name']
	first_name = player['first_name']
	last_name = player['last_name']
	player_full_name = first_name + " " + last_name
	if team_name in team_player_dict:
		player_list = team_player_dict[team_name]
	else: 
		player_list = []
	player_list.append(player_full_name) 
	team_player_dict[team_name] = player_list 
test = str(team_player_dict)
print(eval(test))

