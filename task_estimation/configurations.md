# Configuration Models

# Server Side

> ## Auth Tokens
<details><summary><code>authToken</code></summary>
<p>

> ### **authToken**
> Cholon auth token generation configurations.
> 1. Token `expTime` in milliseconds. 2 days = 172800000.
> 2. Token creation subjects as `sub`.

```
{
    authToken: {
        expTime: 172800000,
        sub: {
            auth: 1,
            register: 2,
            forgotPassword: 3
        }
    }
}
```

</p>
</details>

> ## Trip Request Expiry
<details><summary><code>tripRequestExpiry</code></summary>
<p>

> ### **tripRequestExpiry**
> Cholon trip request expry time configurations.
> 1. `tripRequestExpiry.passenger` is trip request expiry time in milliseconds. 2 mins = 120000.
> 2. `tripRequestExpiry.driver` is trip request accept expiry time in milliseconds. 20 secs = 20000.

```
{
    tripRequestExpiry: {
        passenger: 120000,
        driver: 20000
    }
}
```

</p>
</details>

> ## Document Names
<details><summary><code>documentNames</code></summary>
<p>

> ### **documentNames**
> Cholon document names for different user roles.

```
{
    documentNames: {
        users: {
            profilePicture: 'profPic',
            coverPicture: 'coverPic'
        },
        passengers: {},
        drivers: {
            nationalId: 'nid',
            driverLicense: 'driverLicense'
        },
        owners: {
            vehicleLicense: 'vehicleLicense'
        }
    }
}
```

</p>
</details>

# Client Side

> ## App User Role
<details><summary><code>appUserRole</code></summary>
<p>

> ### **appUserRole**
> Cholon app user role statically set for different client side apps.

> Passenger App
```
{
    appUserRole: 'passenger'
}
```

> Driver App
```
{
    appUserRole: 'driver'
}
```

> Owner App
```
{
    appUserRole: 'owner'
}
```

</p>
</details>