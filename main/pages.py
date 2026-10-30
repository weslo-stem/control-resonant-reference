def define_env(env):
	ctx = env.variables['ctx']

	env.variables['page_combat_abilities'] = ctx + '/reference/dylan/combat-abilities/'
	env.variables['page_movement_abilities'] = ctx + '/reference/dylan/movement-abilities/'
	env.variables['page_talents'] = ctx + '/reference/dylan/talents/'
	env.variables['page_enemies_hiss'] = ctx + '/reference/enemies/hiss/'
	env.variables['page_enemies_mold'] = ctx + '/reference/enemies/mold/'
	env.variables['page_enemies_hedron'] = ctx + '/reference/enemies/hedron/'
	env.variables['page_enemies_resonants'] = ctx + '/reference/enemies/resonants/'
	env.variables['page_items_artifacts'] = ctx + '/reference/items/artifacts/'
	env.variables['page_items_cosmetics'] = ctx + '/reference/items/cosmetics/'
	env.variables['page_items_keyitems'] = ctx + '/reference/items/key-items/'
	env.variables['page_items_materials'] = ctx + '/reference/items/materials/'
	env.variables['page_world_zones'] = ctx + '/reference/world/zones/'
	env.variables['page_world_vendors'] = ctx + '/reference/world/vendors/'
	env.variables['page_world_quests'] = ctx + '/reference/world/quests/'

	combatAbilities = env.variables['page_combat_abilities'] ##
	env.variables['page_spike'] = combatAbilities + 'spike/'
	env.variables['page_barrage'] = combatAbilities + 'barrage/'
	env.variables['page_inferno'] = combatAbilities + 'inferno/'
	env.variables['page_ground_slam'] = combatAbilities + 'ground-slam/'
	env.variables['page_ignite'] = combatAbilities + 'ignite/'
	env.variables['page_growth'] = combatAbilities + 'growth/'
	env.variables['page_spore_burst'] = combatAbilities + 'spore-burst/'
	env.variables['page_push'] = combatAbilities + 'push/'
	env.variables['page_volatile_anomaly'] = combatAbilities + 'volatile-anomaly/'
	env.variables['page_command'] = combatAbilities + 'command/'
	env.variables['page_shield'] = combatAbilities + 'shield/'
	env.variables['page_astral_rebuke'] = combatAbilities + 'astral-rebuke/'

	movementAbilities = env.variables['page_movement_abilities'] ##
	env.variables['page_nav_rush'] = movementAbilities + 'rush/' 
	env.variables['page_nav_dodge'] = movementAbilities + 'dodge/'
	env.variables['page_nav_double_jump'] = movementAbilities + 'double-jump/'
	env.variables['page_nav_gravity_anomaly'] = movementAbilities + 'gravity-anomaly/'
	env.variables['page_nav_reach'] = movementAbilities + 'reach/'
	env.variables['page_nav_elevate'] = movementAbilities + 'elevate/'

	zones = env.variables['page_world_zones'] ##
	env.variables['page_central'] = zones + "central/"
	env.variables['page_downtown'] = zones + "downtown/"
	env.variables['page_evacuation_zone'] = zones + "evacuation-zone/"
	env.variables['page_the_park'] = zones + "the-park/"
	env.variables['page_underpass'] = zones + "underpass/"
	env.variables['page_unknown'] = zones + "unknown/"
	env.variables['page_west_incursion_zone'] = zones + "west-incursion-zone/"

	vendors = env.variables['page_world_zones'] ##
	env.variables['page_vendors_central'] = vendors + "central/"
	env.variables['page_vendors_downtown'] = vendors + "downtown/"
	env.variables['page_vendors_evacuation_zone'] = vendors + "evacuation-zone/"
	env.variables['page_vendors_the_park'] = vendors + "the-park/"
	env.variables['page_vendors_underpass'] = vendors + "underpass/"
	env.variables['page_vendors_unknown'] = vendors + "unknown/"
	env.variables['page_vendors_west_incursion_zone'] = vendors + "west-incursion-zone/"

