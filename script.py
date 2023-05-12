import requests
import json

with open('config.json') as config_file:
    config = json.load(config_file)

url = 'https://free-nba.p.rapidapi.com/players'
headers = {'X-RapidAPI-Host': config['X-RapidAPI-Host'], 
'X-RapidAPI-Key': config['X-RapidAPI-Key']}

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
print(json.dumps(team_player_dict, indent=4))

# player_list = ["Marshon Brooks", "Omri Casspi"]
# team_player_dict = {"Indiana Pacers": ["Ike Ani"], "New York Knicks": ["Ron Baker"], "Memphis Grizzlies": ["Marshon Brooks", "Omri Casspi"]}

# s = {
# 	"Data": [{
# 		"Name": 'Darius',
# 		"Email": 'dariuswilsonxu@gmail.com'
# 	},
# 	{
# 		"Name": 'Matt',
# 		"Email": 'mattly@gmail.com'
# 	}],
# 	"Meta": 2
# }
# print(s["Data"][0]["Name"])
# # print(s)