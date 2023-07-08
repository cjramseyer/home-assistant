![HALogo](https://github.com/cjramseyer/home-assistant/blob/main/images/homeassistant-1920x1080.jpg)

# Home Assistant Configuration

This is the source of my configuration for Home Assistant

----

## What is Home Assistant

Home Assistant is a free and open-source home automation software designed to be the central home automation control system for controlling smart home technology. Home Assistant "core" application software itself is written in Python and its main focus is on local-control and privacy.

----

## Current Configuration

- Home Assistant Version: v2023.7.1
- Supervisor: 2023.7.1
- Operating System 10.3
- Config Date: 7/8/2023 (effective configuration)

**Operating Environment:** Dell OptiPlex 3040 - i3-6100T, 16GB RAM, 240GB SSD, ProxMox, HA Supervised.  HA VM 6GB vRAM + 40GB disk.

----

## Add-ons installed (as of: 03/25/2023)

- DuckDNS
- ESPHome
- Mosquitto broker
- Node-Red
- Samba share
- SSH & Web Terminal
- chrony
- Studio Code Server
- Cloudflared
- Maria DB
- ADGuard Home
- Home Assistant Google Drive Backup

----

## Purpose

The purpose of my use of Home Assistant is to automated our home as much as possible, while continuing to maintain the basic functionality of any automated device.
Switches still function as switches even after they have been made "smart".
A complete failure of the home automation should not cause a failure of anything setup to manage or protect the home.
For example, a failure of home assistant may prevent remote monitoring of a sensor, but will not cause a critical device (sump pump) to cease to function 
(outside the failure of the device itself).

This is the configuration of my Home Assistant as of the date listed above.  This is, and will forever be a work in-progress.
Files located here represent a fully functional configuration at the time they were committed to Github.
Interim updates and potential non-working versions might be found in a seperate branch.

You are free to use my config or any part of it, but I will have no responsibility for its use or damage that may result
from its application in another config or any changes that are made.

Private information is deliberately removed and will not be revealed, however, you may contact me for suggestions or guidance
on how it was used.  I can be contacted via email @ cj <at> ramseyer.org.  I may not be able to respond quickly, please be patient.

### 7-8-2023

HA Backups, and backup redundancy are now in place using the Google Drive backup addon.  Automated daily backups get completed onto the NAS in our house, then also get copied out to Google drive for the dedicated HA user (15GB) worth of storage, so that should continue to be free for the foreseeable future.  Working on room presence sensors and automation.  Our Google Nest thermostat continues to get less smart everyday.  I am seeking local control replacements that actually function.  I previously tried a Radio Thermostat, which required an Apple product to configure.  That's not a real sound setup in this modern age.  When I contacted their support about it, they asked if I could borrow an Apple device.  I promptly returned it.  Seems the work for Voice in HA is progressing very quickly, so since Alexa and Google Assistant are banned from our house (lots of reasons), I may try to implement that late this year.

Until a few months ago, outside of HA, I had several other services setup via port forwarding and open ports in the firewall in order for them to function.  One of them Vaultwarden, did not function well (could not create NEW entries when not on local network).  All open ports are now closed, all port forwarding is disabled.  I moved from that method to using private tunnels (with rules and authentication).  some of the services I have available also authenticate using my Azure M365 tenant, so I have MFA enabled as well helping to make security stronger.

ANNOUNCEMENT: Earlier this year, the Garbage Collection integration available from [Bruxy70](https://github.com/bruxy70/Garbage-Collection) was deprecated.  Though the repo is still available, and the integration can be installed manually, it is no longer available via HACS.  I tried to use the local HA calendar and did not find that method useful/beneficial.  Taking out the trash, recycling, and yard waste, is not an apointment and in some locations may vary because of a holiday or some other event.  Additionally, the integration does a great job of showing days until pickup.  for some, these might be on different days or parts of the year, and would continue indefinitely.  I opened a request to the author about this integration and was recently invited as a collaborator.  I have accepted that invitation and though all the props should go to the original author, I will give my best effort in further updates to this integration.  Once I am more familiar with this integration and the authors existing code, I will look at reactivating this integration to be installed via HACS.

### 3-25-2023

I have moved on from AppDaemon.  While it never failed to function, and remained "usable", it was not "pretty", and could not really be customized in ways similar to HA dashboards.  Though I would still prefer a dashboard solution to have them not require a user id and password that must be maintained, perhaps it's better this way.  climate management has been near completely moved into HA.  We currently have the Nest thermostat, and it's "smarts" aren't really that smart anymore.  All of it's smart functions have been disabled on the thermostat itself, and the intelligience (i.e. when we are home versus away versus vacation.  When everyone is sleeping.  When someone is too warm or cold) has been moved into HA.  Climate is a funny and complex thing to manage.  While the house might not be "cold", someone might feel cold for a variety of reasons.  My goal is to add data and inteligience to this all within HA.  This also enables me to switch to another smart thermostat in the future, requiring little, if any change.
Now over 2 years running HA on a VM under proxmox.  Still running very stable, and reliable.  My next big task is room occupancy.

Other relatively big changes include, Alexa is removed and no longer exists in our house.  Privacy concerns, lack of functionality, stupid responses, and inability to work the way a voice assistant should, plus the additional features, we don't need/want.  The voice assistant functions will be replaced by HA and/or DIY, and I will build microphone/speaker modules to put around the house.  This will maintain privacy and do exactly what we want and nothing we don't.

Outside sensors and controls are also important this year including irrigation, driveway sensor, mailbox, etc.

### 12-29-2022

I have upgraded to the (currently) latest version of HA, and it was by far the fastest, and easiest.  Though I was a little concerned with the python update back in June, I had held off, wondering if I was going to have any significant failures.  Thankfully, I had none.  The HA journey continues.
I am updating my automations, and still using NodeRed.  Now, though, I am taking a slightly different approach.  I am not splitting things up as much as before.

### 2-7-2021

Following a couple weeks since my migration to proxmox from rPi3B+ for my HA instance, everything is quicker and considerably more stable.  I have room to update my HA instance should it be necessary.  Future upgrades this year will include setting up a proxmox cluster.  HA doesn't have (yet) cluster capabilities or multi-instance failover.  This will be important to garner further acceptance for the larger installations.  My own setup will be a proxmox cluster, but I'd like to try a Raspberry pi cluster to have a single box solution.

### 1-2-2020

After upgrading to Home Assistant 2020.12.0 I started to notice a steady exhaustion of memory.  This was difficult to track down and hopefully I have remediated it.
Long story short, this started with a reboot at least once a day, and checking all of my automations, addons, and the rest of my configuration.  In the end, I shutdown all the HA addons except Node-Red and AppDaemon4, though still a little higher than I would prefer, the memory use seems to have stablilized at about 65%.  I have moved my moquitto broker to another rPi to run it.


----

## How to contribute

I welcome new ideas, suggestions for improvement, and examples being used in the real world.  I am also interested in solving problems.
These can all be acheived by opening an issue in this repository.  

----
