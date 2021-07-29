exports.handler = async function(event, context) {
    const azureLocations = {
        "eastasia": "ae",
        "southeastasia": "ase",
        "australiacentral": "auc",
        "australiacentral2": "auc2",
        "australiaeast": "aue",
        "australiasoutheast": "aus",
        "brazilsouth": "brs",
        "brazilsoutheast": "brse",
        "canadacentral": "cac",
        "canadaeast": "cae",
        "northeurope": "eun",
        "westeurope": "euw",
        "francecentral": "frc",
        "francesouth": "frs",
        "germanynorth": "gno",
        "germanywestcentral": "gwc",
        "centralindia": "inc",
        "southindia": "ins",
        "westindia": "inw",
        "japaneast": "jpe",
        "japanwest": "jpw",
        "koreacentral": "krc",
        "koreasouth": "krs",
        "norwayeast": "noe",
        "norwaywest": "now",
        "southafricanorth": "san",
        "southafricawest": "saw",
        "switzerlandnorth": "swn",
        "switzerlandwest": "sww",
        "uaecentral": "uaec",
        "uaenorth": "uaen",
        "uksouth": "uks",
        "ukwest": "ukw",
        "centralus": "uc",
        "eastus": "ue",
        "eastus2": "ue2",
        "northcentralus": "unc",
        "southcentralus": "usc",
        "westus": "uw",
        "westus2": "uw2",
        "westcentralus": "uwc"
    }

    const params = new URLSearchParams(event.queryStringParameters);
    const location = params.get("location");

    return {
        statusCode: 200,
        body: azureLocations[location]
    }
}