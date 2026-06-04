$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$release = Join-Path $root "release"
$zip = Join-Path $release "mohamad-hamdo-portfolio.zip"
if (!(Test-Path $release)) { New-Item -ItemType Directory -Path $release | Out-Null }
if (Test-Path $zip) { Remove-Item -LiteralPath $zip }
$exclude = @("node_modules", "dist", "release", ".git")
$items = Get-ChildItem -LiteralPath $root -Force | Where-Object { $exclude -notcontains $_.Name }
Compress-Archive -Path $items.FullName -DestinationPath $zip -Force
Write-Host "Created $zip"
