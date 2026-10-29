def define_env(env):
	ctx = env.variables['ctx']
	
	# Vendors
	env.variables['img_vendor_central'] = ctx + '/images/vendors/vendor_central.png'
	env.variables['img_vendor_downtown'] = ctx + '/images/vendors/vendor_downtown.png'
	env.variables['img_vendor_evacuation_zone'] = ctx + '/images/vendors/vendor_evacuation_zone.png'
	env.variables['img_vendor_secret_evacuation_zone'] = ctx + '/images/vendors/vendor_secret_evacuation_zone.png.png'
	env.variables['img_vendor_the_park'] = ctx + '/images/vendors/vendor_the_park.png'
	env.variables['img_vendor_underpass'] = ctx + '/images/vendors/vendor_underpass.png'
	env.variables['img_vendor_unknown'] = ctx + '/images/vendors/vendor_unknown.png'
	env.variables['img_vendor_west_incursion_zone'] = ctx + '/images/vendors/vendor_west_incursion_zone.png'

	env.variables['img_s_living_shard'] = ctx + '/images/items/living_shard_small.png'