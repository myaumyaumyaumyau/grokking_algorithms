const graph = {
	'you': ['alice', 'bob', 'claire'],
	'bob': ['anuj', 'peggy'],
	'alice': ['peggy'],
	'claire': ['thom', 'jonny'],
	'anuj': [],
	'peggy': [],
	'thom': [],
	'jonny': [],
}

const morningRoutineGraph = {
    'wakeUp': [],
    'packLunch': ['wakeUp'],
    'brushTeeth': ['wakeUp'],
    'exercise': ['wakeUp'],
    'eatBreakfast': ['brushTeeth'],
    'shower': ['exercise'],
    'getDressed': ['shower']
}