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
	env.variables['page_nav_rush'] = movementAbilities + 'dash/' 
	env.variables['page_nav_dodge'] = movementAbilities + 'dodge/'
	env.variables['page_nav_double_jump'] = movementAbilities + 'double-jump/'
	env.variables['page_nav_gravity_anomaly'] = movementAbilities + 'gravity-anomaly/'
	env.variables['page_nav_reach'] = movementAbilities + 'reach/'
	env.variables['page_nav_elevate'] = movementAbilities + 'elevate/'


